const app = {
    data() {
        return {
            tasks: [{
                    url: "images/genshin_1_4K.jpg",
                    title: "genshin_1_4K",
                    done: false,
                },
                {
                    url: "images/genshin_2_4K.jpg",
                    title: "genshin_2_4K",
                    done: false,
                },
                {
                    url: "images/genshin_3_4K.jpg",
                    title: "genshin_3_4K",
                    done: false,
                },
                {
                    url: "images/genshin_4_4K.png",
                    title: "genshin_4_4K",
                    done: false,
                }
            ],
        };
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
    },
    computed: {
        countUndone() {
            return this.tasks.filter((t) => t.done).length;
        },
    },
};
Vue.createApp(app).mount("#app");