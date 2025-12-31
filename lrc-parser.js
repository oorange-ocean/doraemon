// LRC 歌词解析器
class LRCParser {
    /**
     * 解析 LRC 文件内容
     * @param {string} lrcText - LRC 文件文本内容
     * @returns {Array} 解析后的歌词数组，每个元素包含 { time, text, originalText }
     */
    static parse(lrcText) {
        const lines = lrcText.split('\n');
        const lyrics = [];

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;

            // 匹配时间戳格式 [mm:ss.xxx] 或 [mm:ss]
            const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;
            const text = line.replace(timeRegex, '').trim();

            // 跳过元数据行（如 [by:xxx], [ar:xxx] 等）
            if (line.startsWith('[') && !timeRegex.test(line)) {
                continue;
            }

            // 提取所有时间戳
            let match;
            timeRegex.lastIndex = 0; // 重置正则表达式
            while ((match = timeRegex.exec(line)) !== null) {
                const minutes = parseInt(match[1], 10);
                const seconds = parseInt(match[2], 10);
                const milliseconds = match[3] ? parseInt(match[3].padEnd(3, '0'), 10) : 0;
                const time = minutes * 60 + seconds + milliseconds / 1000;

                if (text) {
                    lyrics.push({
                        time: time,
                        text: text,
                        originalText: line
                    });
                }
            }
        }

        // 按时间排序
        lyrics.sort((a, b) => a.time - b.time);

        // 处理双语歌词：将相同时间戳的歌词合并
        const mergedLyrics = [];
        let currentTime = -1;
        let currentLyrics = [];

        for (let lyric of lyrics) {
            if (Math.abs(lyric.time - currentTime) < 0.01) {
                // 相同时间戳，合并为双语
                currentLyrics.push(lyric.text);
            } else {
                // 新时间戳，保存之前的并开始新的
                if (currentLyrics.length > 0) {
                    mergedLyrics.push({
                        time: currentTime,
                        text: currentLyrics.join('\n'),
                        lines: currentLyrics
                    });
                }
                currentTime = lyric.time;
                currentLyrics = [lyric.text];
            }
        }

        // 添加最后一组
        if (currentLyrics.length > 0) {
            mergedLyrics.push({
                time: currentTime,
                text: currentLyrics.join('\n'),
                lines: currentLyrics
            });
        }

        return mergedLyrics;
    }

    /**
     * 根据当前播放时间获取当前应该显示的歌词索引
     * @param {Array} lyrics - 解析后的歌词数组
     * @param {number} currentTime - 当前播放时间（秒）
     * @returns {number} 当前歌词索引，-1 表示没有匹配的歌词
     */
    static getCurrentLyricIndex(lyrics, currentTime) {
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                return i;
            }
        }
        return -1;
    }
}

