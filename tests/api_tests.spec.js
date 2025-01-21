// Step 1: Add imports
import { test, expect } from '@playwright/test'
import { request } from 'https'

// Step 2: Create a test using request context
test('API GET Request', async ({ request }) => {

    // Step 3: Send a GET request & store response in a variable
    const response = await request.get('https://reqres.in/api/users/2')

    // Step 4: Verify the status code of the response is 200
    expect(response.status()).toBe(200)

    // Step 5: Check response contians some text
    const text = await response.text()
    expect(text).toContain('Janet')

    // Step 6: Write response on the console
    console.log(await response.json())

})


test('API POST Request', async ({ request }) => {

    // Step 3: Send a POST request along with request body & store response in a variable
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Yanny",
            "job": "cheer-leader"
        }
    })

    // Step 4: Verify response status code is 201
    expect(response.status()).toBe(201)

    // Step 5: Check response contains some text
    const text = await response.text()
    expect(text).toContain('Yanny')

    // Step 6: Write response on the console
    console.log(await response.json())

})


test('API PUT Request', async ({ request }) => {

    // Step 3: Send a PUT request along with request body & store response in a variable
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Yanny",
            "job": "cheer-leader"
        }
    })

    // Step 4: Verify response status code is 200
    expect(response.status()).toBe(200)

    // Step 5: Check response contains some text
    const text = await response.text()
    expect(text).toContain('Yanny')

    // Step 6: Write response on the console
    console.log(await response.json())

})


test('API DELETE Request', async ({ request }) => {

    // Step 3: Send a DELETE request & store response in a variable
    const response = await request.delete('https://reqres.in/api/users/2')

    // Step 4: Verify response status code is 204
    expect(response.status()).toBe(204)

})
