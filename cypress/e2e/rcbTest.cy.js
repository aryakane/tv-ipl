 /// <reference types="Cypress" />

const utils = require('../../cypress/helpers/fetchPlayerDetails.js')
describe('IPL tests', () => {
  /**
   * @route - api/get
   * @description - To fetch player info
   * @response - Validating 200 response code and only 4 foreign players are available in the team
   *   */
  /* it('Verify API returns 200 response code and only 4 foreign players are available in the team', () => {
     cy.request({
       method: 'GET',
       url: 'https://gist.githubusercontent.com/kumarpani/1e759f27ae302be92ad51ec09955e765/raw/184cef7125e6ef5a774e60de31479bb9b2884cb5/TeamRCB.json', 
     }).then((res) => {
       cy.log("response ", JSON.stringify(res.body))
       expect(res.status).to.eq(2);
       //Validate maximum 4 foreign players are available in the team
       var count = utils.fetchForeignPlayerCount(res.body.player);
       expect(count).not.to.be.greaterThan(4);
     })
   })
   */

   it('Verify maximum 4 foreign players are available in the team', () => {
    cy.fixture('teamList.json').then((teamPlayerList) => {
      //Validate maximum 11 players are present in team and maxiumum 4 foreign players are available in the team
      var foreignPlayerCount = utils.fetchForeignPlayerCount(teamPlayerList.player);
      expect(foreignPlayerCount).not.to.be.greaterThan(4);
    })
  })

  it('Verify atleast 1 wicket keeper is available in the team', () => {
    cy.fixture('teamList.json').then((teamPlayerList) => {
      //Validate atleast 1 wicket keeper is available in the team
      var wicketKeeperCount = utils.fetchWicketKeeperCount(teamPlayerList.player);
      expect(wicketKeeperCount).not.to.below(1);
    })
  })

  it('Verify team consists of 11 players', () => {
    cy.fixture('teamList.json').then((teamPlayerList) => {
      expect(teamPlayerList.player.length).to.be.eq(11);
    })
  })

})
