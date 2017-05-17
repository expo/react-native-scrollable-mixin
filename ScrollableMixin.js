let ScrollableMixin = {
  getInnerViewNode(): any {
    return this.getScrollResponder().getInnerViewNode();
  },

  scrollTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollTo(destY, destX);
  },

  scrollToEnd(options?: { animated?: boolean }) {
    this.getScrollResponder().scrollToEnd(options);
  },

  scrollWithoutAnimationTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollWithoutAnimationTo(destY, destX);
  },
};

module.exports = ScrollableMixin;
