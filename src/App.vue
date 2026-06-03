<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
onLaunch(options => {
  console.log('App Launch', options);
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style></style>
