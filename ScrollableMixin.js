/**
 * @flow
 */

var ScrollableMixin = {
  getInnerViewNode(): any {
    return this.getScrollResponder().getInnerViewNode();
  },

  scrollTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollTo(destY, destX);
  },

  scrollWithoutAnimationTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollTo(destY, destX);
  },
};

module.exports = ScrollableMixin;
