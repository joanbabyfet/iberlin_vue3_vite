<template>
    <div id="HeaderIdx">
        <div id="innerHeaderIdx">
          <div id="top">
            <router-link to="/"><img class="idxTopLogo" src="@/assets/images/logo.jpg" alt="logo" name="idxTopLogo" width="211" height="59" border="0" id="idxTopLogo" /></router-link>
            <div class="nav"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side">&nbsp;</span><router-link to="" @click="setLang('en')">English</router-link><span class="side">&nbsp;</span><router-link to="" @click="setLang('zh')">中文</router-link></div>
          </div>
          <div id="HeaderNavIdx">
            <div id="innerHeaderNavIdx">
              <ul>
                <li><router-link to="/about" activeClass="current">{{ $t('nav.about') }}</router-link></li>
                <li><router-link to="/news" activeClass="current">{{ $t('nav.news') }}</router-link></li>
                <li><router-link to="/application" activeClass="current">{{ $t('nav.application') }}</router-link></li>
                <li><router-link to="/products" activeClass="current">{{ $t('nav.products') }}</router-link></li>
                <li class="navEnd"><router-link to="/contact" activeClass="current">{{ $t('nav.contact') }}</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import cookies from 'vue-cookies'

const { locale } = useI18n()
//切換語言
function setLang(lang) {
    locale.value = lang //实时切换
    localStorage.setItem('language', lang)
    //sessionStorage.setItem('language', lang)
    //cookies.config("1m") //设置过期时间1个月
    //cookies.set('language', lang)
}
</script>