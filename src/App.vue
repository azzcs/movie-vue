<template>
  <router-view />
</template>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
export default {
  name: "main-app",
  mounted: function() {
    window.onload = function() {
      document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
      });
    };
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      if (this.$route.fullPath == "/") {
        this.$router.push("/m/home");
      } else if (this.$route.fullPath.indexOf("/p/") == 0) {
        this.$router.push(this.$route.fullPath.replace("/p/", "/m/"));
      } else if (this.$route.fullPath.indexOf("/m/") != 0) {
        this.$router.push("/m" + this.$route.fullPath);
      }
    } else {
      if (this.$route.fullPath == "/") {
        this.$router.push("/p/home");
      } else if (this.$route.fullPath.indexOf("/m/") == 0) {
        this.$router.push(this.$route.fullPath.replace("/m/", "/p/"));
      } else if (this.$route.fullPath.indexOf("/p/") != 0) {
        this.$router.push("/p" + this.$route.fullPath);
      }
    }
  }
};
</script>
