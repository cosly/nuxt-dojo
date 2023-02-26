export default defineEventHandler(async(event) => {

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=CbrJVzH6xNqUTtpPhGGIFgYBa6Xvap2dhAvuuHNi&currencies=USD&base_currency=EUR')

    return data

})