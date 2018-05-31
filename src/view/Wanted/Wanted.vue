<template>
  <div id="wanted">
    <h3 class="title">发布通缉令</h3>
    <el-form ref="formInfo" :model="formInfo" label-width="80px">
      <el-form-item :required="true" label="标题" prop="title">
        <el-input v-model="formInfo.title" size="small"></el-input>
      </el-form-item>
      <el-form-item :required="true" label="头像" prop="imgUrl">
        <input type="file" name="file" @change="getBase64" id="img" >
        <img v-if="formInfo.imgUrl" :src="formInfo.imgUrl" class="avatar">
      </el-form-item>
      <el-form-item :required="true" label="姓名" prop="name">
        <el-input v-model="formInfo.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="formInfo.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
          <el-radio :label="2">未知</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :required="true" label="民族" prop="nation">
        <el-select v-model="formInfo.nation" placeholder="请选择民族" size="small">
          <el-option
            v-for="item in nationList"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
      </el-select>
      </el-form-item>
      <el-form-item :required="true" label="出生日期" prop="birth">
        <el-date-picker v-model="formInfo.birth" type="date" placeholder="选择日期" size="small"></el-date-picker>
      </el-form-item>
      <el-form-item :required="true" label="户籍地址" prop="hometown">
        <el-input v-model="formInfo.hometown" size="small"></el-input>
      </el-form-item>
      <el-form-item :required="true" label="内容" prop="detailMsg">
        <el-input type="textarea" v-model="formInfo.detailMsg"></el-input>
      </el-form-item>
      <el-form-item :required="true" label="发布单位" prop="policeStation">
        <el-input v-model="formInfo.policeStation" size="small"></el-input>
      </el-form-item>
      <el-form-item :required="true" label="发布时间" prop="date">
        <el-date-picker v-model="formInfo.date" type="date" placeholder="选择日期" size="small"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formInfo')" size="small">立即发布</el-button>
        <el-button @click="resetForm('formInfo')" size="small">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import nationJson from 'common/js/nation'
import { publishWanted } from 'http'
import { dateFmt } from 'common/js/util'
export default {
  data () {
    return {
      formInfo: {
        msgType: 1,
        title: '',
        imgUrl: '',
        name: '',
        sex: 1,
        nation: '',
        birth: '',
        hometown: '',
        detailMsg: '',
        policeStation: '',
        date: ''
      },
      nationList: nationJson
    }
  },
  methods: {
    submitForm () {
      this.formInfo.birth = dateFmt(new Date(this.formInfo.birth)).split(' ')[0]
      this.formInfo.date = dateFmt(new Date(this.formInfo.date)).split(' ')[0]
      publishWanted({
        deviceIdList: ['111111'],
        ...this.formInfo
      })
      console.log({
        deviceIdList: ['111111'],
        ...this.formInfo
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getBase64 (event) {
      if (event.target.files.length > 0) {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
          this.formInfo.imgUrl = reader.result
        }
      }
    }
  },
  mounted () {}
}
</script>

<style lang="stylus" scoped>
#wanted
  height 100%
  padding .416667rem .15625rem .208333rem
  border-radius .03125rem
  background #fff
  overflow-y scroll
  .title
    padding-left 20px
    line-height 18px
    font-size 18px
    color #333
  #img
    height 32px
    line-height 28px
    -webkit-appearance none
    background-color #fff
    background-image none
    border-radius 4px
    box-sizing border-box
    outline none
    padding 0 15px
    margin 0
    cursor pointer
</style>

<style lang="stylus">
#wanted
  .el-textarea__inner
    height 1.25rem
    resize none
  .el-form
    width 80%
  .el-textarea__inner
    height .9375rem
  .avatar
    display block
    width .927083rem
    height .927083rem
    padding-top 22px
</style>
