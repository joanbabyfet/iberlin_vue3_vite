<template>
    <div id="footerIdx">
        <div id="innerFooter">
            <div class="nav">
                <router-link to="/about" activeClass="current">{{ $t('nav.about') }}</router-link><span class="side">&nbsp;</span>
                <router-link to="/news" activeClass="current">{{ $t('nav.news') }}</router-link><span class="side">&nbsp;</span>
                <router-link to="/application" activeClass="current">{{ $t('nav.application') }}</router-link><span class="side">&nbsp;</span>
                <router-link to="/products" activeClass="current">{{ $t('nav.products') }}</router-link><span class="side">&nbsp;</span>
                <router-link to="/contact" activeClass="current">{{ $t('nav.contact') }}</router-link>
            </div>
            <div class="copyright">Copyright ©2012 iBerlin Technology Co., Ltd. All other marks are the property of their respective owners.</div>
        </div>
    </div>
</template>