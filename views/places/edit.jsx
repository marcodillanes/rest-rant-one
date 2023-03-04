const React = require('react')
const Def = require('../default')

function edit({ place }) {
    return (
        <Def>
            <main>
                <h2>Edit Restaurant</h2>
                <form action={`/places/${place.id}?_method=PUT`} method='POST'>
                    <fieldset>
                        <legend>Restaurant Info</legend>
                        <div className="form-group">
                            <label htmlFor='name'>Name</label>
                            <input className="form-control" type='text' name='name' defaultValue={place.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='city'>City</label>
                            <input className="form-control" type='text' name='city' defaultValue={place.city} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='state'>State</label>
                            <select className="form-control" id="state" name="state" defaultValue={place.state}>
                                <option value="">---</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Marianas Islands</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="VI">Virgin Islands</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' type='text' name='cuisines' defaultValue={place.cuisines} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='founded'>Founded</label>
                            <input className='form-control' type='text' name='founded' defaultValue={place.founded} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Restaurant Image</legend>
                        <div className='form-group'>
                            <label htmlFor='pic'>Picture URL</label>
                            <input className='form-control' type='text' name='pic' defaultValue={place.pic} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='source'>Source Name</label>
                            <input className='form-control' type='text' name='srcName' defaultValue={place.srcName} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='attr'>Source URL</label>
                            <input className='form-control' type='text' name='srcUrl' defaultValue={place.srcUrl} />
                        </div>
                    </fieldset>
                    <input type="submit" className='btn btn-primary' />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit