import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCountries } from "../redux/actions.js/countryActions";

export const AddCountry = ({isOpen, handleModel, addCountry}) => {
  const [countryName, setCountryName] = useState("");
  const [continent, setContinent] = useState("");
  const [rank, setRank] = useState("");
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  let formData = {};

 const handleFormFields = () =>{
        
    dispatch(addCountries([...countries.countries,{"name": countryName , "continent": continent,"rank": rank}]))
    handleModel(false)    
  }
  console.log(formData)
    return (
        <div>
            <div className="modal fade show" id="exampleModalLive" tabIndex={1} aria-labelledby="exampleModalLiveLabel" aria-modal="true" role="dialog" style={{ display: isOpen?"block":"none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Country</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> handleModel(false)}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Country Name</label>
                                    <input type="text" name="country" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter country name" onChange={(e)=>setCountryName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Continent</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Continent" onChange={(e)=>setContinent(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Rank</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Rank" onChange={(e)=>setRank(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> handleModel(false)}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleFormFields}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
