const zarray = ['Balázs', 'Orsi', 'Hanga', 'Benedek', 'Lilla', 'Hanna']


const talalatok = zarray.filter(function(csaladtag){
    return csaladtag.toLowerCase().includes('an')
})

for(let i=0; i<talalatok.length;i++){
    console.log(talalatok[i])
}