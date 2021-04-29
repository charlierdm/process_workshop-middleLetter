describe('middleLetter', function(){

  it('returns the middle letters of test', function(){
    expect(middleLetter('test')).toEqual('es')
  })

  it('returns the middle letters of testing', function(){
    expect(middleLetter('testing')).toEqual('t')
  })

  it('returns the middle letters of middle', function(){
    expect(middleLetter('middle')).toEqual('dd')
  })

  it('returns the middle letter of A', function(){
    expect(middleLetter('A')).toEqual('A')
  })

  it('returns the middle letters of of', function(){
    expect(middleLetter('of')).toEqual('of')
  })
  

})