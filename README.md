# ug-obs-background

> User Group OBS Background is an electron.js app using vue.js and vuex.
> Main goal is get a interactive background for OBS and use it in User Group Meetups
> You can set a list of talks, and quick change between them.
> Also you can set talk as lightning talk and magically a countdown appears
 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# run webpack in production
npm run pack

```
## Create new user group component
It's easy, simpy create a new vue component in renderer/UserGroup/[yourUG]/yourUG.vue and rebuild app, it will be imported automatically.

Make sure you import Usergrpup.js into your component and use as mixin.



More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
