import {faker} from '@faker-js/faker'

describe("GoRest Automation Api Testing", ()=> {
    let token, userId

    const newUser = {
        name: faker.person.firstName(),
        gender: 'male',
        email: faker.internet.email(),
        status: 'active',
    }
    const updatedUser = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        status: 'active',
    }
    const getAuthHeaders = () => ({
        Authorization: `Bearer ${token}`,
    })

    before(() => {
        token = Cypress.env('token')
    })


    it('Create a user', () => {
        cy.request({
            method: 'POST',
            url: '/public/v2/users',
            headers: getAuthHeaders(),
            body: newUser

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body.name).to.eq(newUser.name)
            expect(response.body.email).to.eq(newUser.email)
            expect(response.body.gender).to.eq('male')
            expect(response.body.status).to.eq('active')
            userId = response.body.id;
        })
    })

    it("Get the created user", () => {

        cy.request({
            method: 'GET',
            url: `/public/v2/users/${userId}`,
            headers:getAuthHeaders()

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(userId)
            expect(response.body).to.deep.include(newUser)
        })
    })

    it("Update the user info", () => {

        cy.request({
            method: 'PATCH',
            url: `/public/v2/users/${userId}`,
            headers: getAuthHeaders(),
            body: updatedUser

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(userId)
            expect(response.body.name).to.eq(updatedUser.name)
            expect(response.body.email).to.eq(updatedUser.email)
            expect(response.body.status).to.eq(updatedUser.status)

        })

        cy.request({
            method: 'GET',
            url: `/public/v2/users/${userId}`,
            headers: getAuthHeaders()

        }).then((getResponse) => {
            expect(getResponse.status).to.eq(200)
            expect(getResponse.body.id).to.eq(userId)
            expect(getResponse.body).to.deep.include(updatedUser)
        })
    })

    it('Delete the user', () => {

        cy.request({
            method: 'DELETE',
            url: `/public/v2/users/${userId}`,
            headers:getAuthHeaders()

        }).then((response) => {
            expect(response.status).to.eq(204)
        })

        cy.request({
            method: 'GET',
            url: `/public/v2/users/${userId}`,
            headers: getAuthHeaders(),
            failOnStatusCode: false,

        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})
