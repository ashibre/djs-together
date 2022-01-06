'use strict';

/**
 * All snowflakes with knowed applications activities.
 * 
 * @typedef {Snowflake} APPLICATIONS
 */
module.exports.APPLICATIONS = {
    YOUTUBE: '880218394199220334',
    YOUTUBE_DEV: '880218832743055411',
    POKER: '755827207812677713',
    BETRAYAL: '773336526917861400',
    FISHING: '814288819477020702',
    CHESS_DEV: '832012586023256104',
    CHESS: '832012774040141894',
    LETTER_TILE: '879863686565621790',
    WORD_SNACK: '879863976006127627',
    DOODLE_CREW: '878067389634314250', //
    ANKWORD: '879863881349087252',
    SPELLCAST: '852509694341283871', 
    CHECKERS: '832013003968348200', 
    PUTTPARTY: '763133495793942528'
} // list from https://npmjs.com/package/discord-together
/**
 * All target invite types avaible to Discord.
 * 
 * @typedef {number} INVITE_TARGET_TYPES
 */
module.exports.INVITE_TARGET_TYPES = {
    STREAM: 1,
    EMBEDDED_APPLICATION: 2
}
