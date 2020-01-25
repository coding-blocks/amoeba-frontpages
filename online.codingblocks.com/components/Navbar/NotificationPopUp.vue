<template>
  <div class="pop-up dropdown-ul border-card c-notification display-block">
    <VAsync :task="fetchNotificationsTask">
      <template v-slot="{ value: notifications }">
        <div v-for="notification in notifications" :key="notification.id">
          <a :href="notification.url" target="_blank">
            <div class="dropdown-li row">
              <div class="notify-type col-2 pt-3 justify-content-center align-items-center">
                <div class="notify-icon">
                  <span class="notify-dot new"></span>
                  <img src="/images/announcement.svg" alt="">
                </div>
              </div>
              <div class="notify-text col-10">
                <p>{{notification.message}}</p>
              </div>
            </div>
          </a>
        </div>
      </template>
    </VAsync>
  </div>
</template>
<script>
import VAsync from '~/components/Base/VAsync';

export default {
  components: {
    VAsync
  },
  tasks(t) {
    return {
      fetchNotificationsTask: t(function *() {
        const response = yield this.$axios.get('notifications/me', {
          page: {
            offset: 0,
            limit: 20
          },
          sort: '-id'
        })
        return this.$jsonApiStore.sync(response.data)
      })
    }
  },
  computed: {
    notifications() {
      return this.fetchNotificationsTask.lastResolved.value
    }
  }
}
</script>
<style scoped>
  .c-notification {
    height: 500px;
    overflow-y: scroll;
  }
</style>