<template>
    <div id="innerMainRegion" class="visualAboutUs">
        <div id="pageBanner"><img src="@/assets/images/visual/aboutUs.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="@/assets/images/visual/pageTitle/aboutUS.png" width="200" height="35" /></div>
                <div id="mainContents">
                    <h2>{{ $t('about.title') }}</h2>
                    <div v-html="$t('about.description')"></div>
                </div>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>