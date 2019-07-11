const posts = [
    {
        title: 'MemoMonday',
        body: 'kurva jó számot találtam'
    }, {
        title: 'FOO',
        body: 'mulattam, szarrá áztam'
    }, {
        title: 'Melo',
        body: 'egész fasza helyet találtam'
    }
]

const index = posts.findIndex (function(post, index) {
    return post.title === 'Melo'
})

//console.log(`A keresett poszt:`)
//console.log(index)

console.log(`keresett objektum: ${posts[index]}`)
 
//console.log(`cím: ${posts[index].title}, tartalom: ${posts[index].body}`)


