const years = [
    {
        id: '2017',
        name: '2017'
    },
    {
        id: '2018',
        name: '2018'
    },
    {
        id: '2019',
        name: '2019'
    },
    {
        id: '2020',
        name: '2020'
    },
    {
        id: '2021',
        name: '2021'
    },
];

const thisYear = new Date().getFullYear();
if (thisYear > 2021) {
    for (var i = 2022; i <= thisYear; i++)
        years.push({id: i + "", name: i + ""})
}

export default years;
