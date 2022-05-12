import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate}) => {

    const menuList = ['여성','남성','아동','지속가능성']
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate('/login')
    }

    const search = (event) =>{
        if(event.key === "Enter"){
           let keyword = event.target.value;     //검색창에 입력 + 엔터시 키워드 추출
           navigate(`/?q=${keyword}`)
        }

    }



  return (
    <div>
        <div className='login-button'onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />     
            <div>{authenticate == true? "로그아웃":"로그인"}</div>


        </div>
 
 
        <div className='home-logo'>
            <img width ="100" src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" href="/"/>
        </div>

        <div className='menu-area'>    
            <ul className='menu'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search-bar'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event)=>search(event)} />
            </div>
        </div>

        
    </div>
  )
}

export default Navbar