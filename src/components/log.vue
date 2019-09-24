<template>
  <div class="body">
    <div class="main">
      <div class="img"></div>
      <div class="login">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
          return {
            link: '/logon',
            numberValidateForm: {
              user: '',
              password: '',
            }
          };
        },
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
  }
</script>

<style scoped>
  .body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    min-width: 980px;
  }

  .main {
    width: 980px;
    height: 370px;
    margin-top: 162.6px;

  }

  .img {
    float: left;
    width: 480px;
    height: 370px;
    background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/maoyan.png");
  }

  .login {
    float: left;
    width: calc(100% - 480px);
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>
