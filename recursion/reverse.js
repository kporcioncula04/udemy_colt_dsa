function reverse(str){
  if(str <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

console.log(reverse('awesome'))// 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
