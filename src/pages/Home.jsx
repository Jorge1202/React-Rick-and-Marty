import React, { useEffect, useState } from 'react';
import Container from '../containers/Container';
import Paginacion from '../components/Paginacion'

import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Fetch from '../assets/js/Fetch';

import './styles/Home.scss'

const info = {
    count: 0,
    next: "",
    pages: 0,
    prev: "",
}

// const initialState = {
//     favorites: [],
//     ContadorFav: 0,
// }
// const favoriteReducer = (state, action) => {

//     switch (action.type) {

//         case 'ADD_TO_FAVORITE':
//             return {
//                 ...state,
//                 favorites: [...state.favorites, action.payload]
//             }
//         default:
//             return state;
//     }

// }

const Home = () => {
    const [listCharacter, setCharacter] = useState([]);
    const [listFavorites, setListFavorites] = useState(JSON.parse(localStorage.getItem('favolite')) ? JSON.parse(localStorage.getItem('favolite')) : []);
    const [paginacion, setPaginacion] = useState(info)
    const [pagina, setPagina] = useState('')
    const [sections, setSections] = useState('Characters')
    const [search, setSearch] = useState('');
    
    // const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [count, setCount] = useState(0);
    
    useEffect(async () => {
        await getDatosCharacter(); 
    }, [])

    const handleChange = e => {
        const { value } = e.target;
        setSearch(value);
        // value!=''? getDatosFilter(value) :getDatosCharacter();
       getDatosFilter(value) 
    };
    
    const getDatosCharacter = async () => {
        setPagina('1');
        let res = await Fetch.GET({url: `character?page=${pagina}`});
        setCharacter(res.results);
        setPaginacion(res.info);
    }

    const getDatosFilter = async (value) => {
        debugger
        if(sections == 'Characters'){
            if(value=='') {getDatosCharacter();}
            else{
                let res = await Fetch.GET({url: `character?name=${value}`});
                if(res.error){
                    setCharacter([]);
                    setPaginacion(info);
                } else {
                    setCharacter(res.results);
                    setPaginacion(res.info);
                }
                // let resStatus = await Fetch.GET({url: `character?status=${value}`});
                // let resSpecies = await Fetch.GET({url: `character?species=${value}`});
            }
        } else {
            debugger
            let arrayTemporal = null;
            arrayTemporal = JSON.parse(localStorage.getItem('favolite'));
            if(arrayTemporal){
                let list = arrayTemporal.filter(x => x.name.toLowerCase().includes(value.toLowerCase()));
                setListFavorites(list);
            }   
        }
    }

    const paginacionCharacter = async (url) => {
        let res = await Fetch.GET_URL({url: url});
        setCharacter(res.results);
        setPaginacion(res.info);
    }

    const handleClick = (favorite) => {
        let arrayTemporal = null;
        arrayTemporal = JSON.parse(localStorage.getItem('favolite'));
        if(arrayTemporal){
            let found = listFavorites.find(x => x.id == favorite.id)
            if(!found){
                arrayTemporal.unshift(favorite)
                localStorage.setItem('favolite', JSON.stringify(arrayTemporal));
                setListFavorites(arrayTemporal)
            } else{
                handleClickNotLike(arrayTemporal, favorite)
            }
        } else {
            let val =[];
            val.push(favorite)
            localStorage.setItem('favolite', JSON.stringify(val));
            setListFavorites(val)

        }
    }

    const handleClickNotLike = (arrayTemporal, favorite) => {
        let index = listFavorites.findIndex(x => x.id == favorite.id)
        if(index != -1){
            arrayTemporal.splice(index, 1);
            localStorage.setItem('favolite', JSON.stringify(arrayTemporal));
            setListFavorites(arrayTemporal);
        }
    }

    const changeSecciton = (section) => {
        setSections(section);
        setSearch('');
        getDatosFilter('');
    }

    return (
        <Container >
            <div className='informativo row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='row'>
                        <div onClick={(e) => changeSecciton('Characters', e)} className={`col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4`}>  
                        {/* onClick={()=>{setSections('Characters')}} */}
                            <CardSection  name="Characters" activo={sections=='Characters'}/>
                        </div> 
                        <div onClick={(e) => changeSecciton('favorites', e)} className='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                            <CardSection  name="My favorites" activo={sections=='favorites'}/>
                        </div>  
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className="col-auto">
                        <input value={search} name="searchtxt" onChange={handleChange} type="search" className="form-control input-search " id="search" placeholder="Search characters"/>
                    </div>
                </div>
            </div>
            {
                sections=='Characters' &&
                    <Paginacion paginacion={paginacion} paginacionCharacter={paginacionCharacter} />  
            }
            <div className='cards row'>
                {   
                    sections=='Characters' ?
                        listCharacter.length != 0 ? 
                            listCharacter.map((item)=> {
                                return <Card key={item.id} data={item} handleClick={handleClick}/>
                            })
                        :   <div><strong>No characters found...</strong> </div>
                    :   listFavorites.length != 0 ?
                            listFavorites.map((item)=> {
                                return <Card key={item.id} data={item} handleClick={handleClick}/>
                            })
                        :
                            <div><strong>There are no favorite characters... </strong></div>

                }
            </div>
            {
                sections=='Characters' &&
                    <Paginacion paginacion={paginacion} paginacionCharacter={paginacionCharacter} /> 
            }
        </Container>
    );
};


export default Home;