'use strict';

const { APPLICATIONS, INVITE_TARGET_TYPES } = require('./src/togetherid');
const { VoiceChannel, Invite } = require('discord.js');

Object.assign(VoiceChannel.prototype, {
   /**
    * Create an youtube together invite to the voice channel.
    * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an youtube invite to the voice channel
    * channel.createYoutubeTogetherInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createYoutubeTogetherInvite(options = {}) {
      const dev = !!(options && options.dev);
      return this.createInvite({
         ...options,
         targetApplication: dev ? APPLICATIONS.YOUTUBE_DEV : APPLICATIONS.YOUTUBE,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an poker invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an poker invite to the voice channel
    * channel.createPokerInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createPokerInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.POKER,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an betrayal invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an betrayal invite to the voice channel
    * channel.createBetrayalInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createBetrayalInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication:
            APPLICATIONS.BETRAYAL,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an fishing invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an fishing invite to the voice channel
    * channel.createFishingInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createFishingInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.FISHING,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an chess invite to the voice channel.
    * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an chess invite to the voice channel
    * channel.createChessInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createChessInvite(options = {}) {
      const dev = !!(options && options.dev);
      return this.createInvite({
         ...options,
         targetApplication: dev ? APPLICATIONS.CHESS_DEV : APPLICATIONS.CHESS,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an letter tile invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an letter tile invite to the voice channel
    * channel.createLetterTileInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createLetterTileInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.LETTER_TILE,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an word snack invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an word snack invite to the voice channel
    * channel.createWordSnackInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createWordSnackInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.WORD_SNACK,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
    * Create an doodle crew invite to the voice channel.
    * @param {CreateInviteOptions} [options={}] The options for creating the invite.
    * @returns {Promise<Invite>}
    * @readonly
    * @example
    * // Create an DoodleCrew invite to the voice channel
    * channel.createDoodleCrewInvite()
    *   .then(console.log)
    *   .catch(console.error);
    */
   createDoodleCrewInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.DOODLE_CREW,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },

   /**
   * Create an word snack invite to the voice channel.
   * @param {CreateInviteOptions} [options={}] The options for creating the invite.
   * @returns {Promise<Invite>}
   * @readonly
   * @example
   * // Create an Ankword invite to the voice channel
   * channel.createAnkwordInvite()
   *   .then(console.log)
   *   .catch(console.error);
   */
   createAnkwordInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.ANKWORD,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },
   /**
   * Create an Spellcast invite to the voice channel.
   * @param {CreateInviteOptions} [options={}] The options for creating the invite.
   * @returns {Promise<Invite>}
  * @readonly
  * @example
  * // Create an Spellcast invite to the voice channel
  * channel.createSpellcastInvite()
  *   .then(console.log)
  *   .catch(console.error);
  */
   createSpellcastInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.SPELLCAST,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },
   /**
 * Create an checkers invite to the voice channel.
 * @param {CreateInviteOptions} [options={}] The options for creating the invite.
 * @returns {Promise<Invite>}
 * @readonly
 * @example
 * // Create an checkers invite to the voice channel
 * channel.createCheckersInvite()
 *   .then(console.log)
 *   .catch(console.error);
 */
   createCheckersInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.CHECKERS,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   },
   /**
* Create an Puttparty invite to the voice channel.
* @param {CreateInviteOptions} [options={}] The options for creating the invite.
* @returns {Promise<Invite>}
* @readonly
* @example
* // Create an putt party invite to the voice channel
* channel.createPuttpartyInvite()
*   .then(console.log)
*   .catch(console.error);
*/
   createPuttpartyInvite(options = {}) {
      return this.createInvite({
         ...options,
         targetApplication: APPLICATIONS.PUTTPARTY,
         targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
      });
   }
});