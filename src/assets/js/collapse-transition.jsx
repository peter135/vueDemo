import { Transition } from 'vue';

// collapse-transition.js
const transitionStyle = '0.2s height ease-in-out';
const TransitionHook = {
  beforeEnter(el) {
    el.style.transition = transitionStyle;
    if (!el.dataset) el.dataset = {};

    el.style.height = 0;
  },

  enter(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = '';
    }
    el.style.overflow = 'hidden';
  },

  afterEnter(el) {
    el.style.transition = '';
    el.style.height = '';
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = transitionStyle;
      el.style.height = 0;
    }
  },

  afterLeave(el) {
    el.style.transition = '';
    el.style.height = '';
  }
};

export default {
  render () {
    const data = {
      on: TransitionHook,
    };
    return <Transition 
              onBeforeEnter={data.on.beforeEnter}
              onEnter={data.on.enter}
              onAfterEnter={data.on.afterEnter}
              onBeforeLeave={data.on.beforeLeave}
              onLeave={data.on.leave}
              onAfterLeave={data.on.afterLeave}
              >
              {this.$slots.default()}
           </Transition>;
    
  }
};