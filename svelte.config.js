
import sveltePreprocess from 'svelte-preprocess';
const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@import "src/scss/_variables.scss";'
    }
  })
};
export default config;

