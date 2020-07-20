<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        User
      </h1>
      <h2 class="info">
        {{ user.name }}
      </h2>
      <nuxt-link class="button" to="/users">
        Users
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  asyncData ({ params, error, $http }) {
    return $http.$get('/api/users/' + params.id)
      .then((res) => {
        return { user: res }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
