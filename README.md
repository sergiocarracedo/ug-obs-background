# ug-obs-background

> User Group OBS Background is an electron.js app using vue.js and vuex.
> The main goal is to get a interactive background for OBS and use it in User Group Meetups
> You can set a list of talks and quickly move among them.
> You can also set a talk as lightning talk and countdown appears magically.
 

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


## Keyboard Shortcuts

```CtrlOrCmd + S``` Open setings dialog

```CtrlOrCmd + Left``` Prev talk

```CtrlOrCmd + Right``` Next talk

```CtrlOrCmd + U``` About


## Create new user group component
It's easy, simpy create a new vue component in renderer/UserGroup/[yourUG]/yourUG.vue and rebuild app, it will be imported automatically.

Make sure you import Usergrpup.js into your component and use as mixin.

## Example images

![OBS01](http://www.sergiocarracedo.es/uploads/obsbackground01.png)

![OBS02](http://www.sergiocarracedo.es/uploads/obsbackground02.png)

![OBS03](http://www.sergiocarracedo.es/uploads/obsbackground03.png)

----

More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/en/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
