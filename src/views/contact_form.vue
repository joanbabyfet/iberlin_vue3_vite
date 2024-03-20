<template>
    <div id="innerMainRegion" class="visualContactUS">
    <div id="pageBanner"><img src="@/assets/images/visual/contactUsFrom.jpg" width="489" height="489" /></div>
    <div id="bodyMain">
      <div id="innerBodyMain">
        <div class="mainTitle titleBrand"><img src="@/assets/images/visual/pageTitle/contactUS.png" width="200" height="35" /></div>
        <div id="subMenu">
          <div id="innerSubMenu"><router-link to="/contact">Information</router-link><span class="side">&nbsp;</span>Contact US Form</div>
        </div>
        <div id="mainContents">
          <h2> Contact US Form</h2>
          <el-form ref="contactForm" :model="form" :rules="rules" label-width="130px">
            <el-form-item label="Contact window" prop="name">
              <el-input v-model="form.name" placeholder="Enter Contact window"></el-input>
            </el-form-item>
            <el-form-item label="Phone no" prop="mobile">
              <el-input v-model="form.mobile" placeholder="Enter Phone no"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" placeholder="Enter Email"></el-input>
            </el-form-item>
            <el-form-item label="Message" prop="content">
              <el-input type="textarea" v-model="form.content" placeholder="Enter Message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">Submit</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div id="mainFooterSide"></div>
  </div>
</template>

<script setup>
import useContactForm from '@/composables/useContactForm'

//頁面使用組合函数
const { contactForm, form, submitForm, rules } = useContactForm()
</script>
