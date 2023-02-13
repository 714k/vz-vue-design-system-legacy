<template>
  <h2>{{ title }}</h2>
  <nav role="navigation" class="vz-table-of-contents">
    <ul>
      <li 
        :class="anchor.classes"
        v-for="anchor in anchors"
        :key="anchor.id"
        role="list">
          <a :title="anchor.title" :href="anchor.href" ref="skipLink">
            <span>{{ anchor.label }}</span>
          </a>
      </li>
    </ul>
  </nav>
</template> 

<script>

import { reactive, computed } from 'vue';

export default {
  name: 'vz-table-of-contents',

  props: {
    title: {
      type: String,
      required: true,
    },
    anchors: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vz-table-of-contents': true,
        'vz--label': props.title,
        'vz--no-label': !props.title,
        [`vz-table-of-contents-${props.title || 'medium'}`]: true,
      })),
      watch: {
        $route() {
          this.$refs.skipLink.focus();
          this.$refs.skipLink.scrollIntoView();
        }
      }
    }
  },
};
</script>
