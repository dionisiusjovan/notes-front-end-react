const getData = () => {
    return [
        {
            id: 1,
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
            archived: true,
            createdAt: '2022-04-15T01:44:36.352Z'
        },
        {
            id: 3,
            title: "Kafka",
            body: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.`,
            archived: false,
            createdAt: '2022-06-07T19:53:14.111Z'
        },
    ];
}

export { getData };