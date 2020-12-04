import React from 'react';
import axios from 'axios';

export default class FetchBook extends React.Component{
    
    state ={
        fetchbooks:[],
    };
    
    componentDidMount(){
        axios.get(" https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Hr15XG3KdQ9Cf9OaQA5kkVFNUWrvqdcJ")
        .then(res=>{
            console.log(res.data.results);
            this.setState({fetchbooks:res.data.results});
        });
        
    } 
    render()
    {
        
        return (
            <>
        best selling books;
            <ul>
                {this.state.fetchbooks.map(fetchbook => <li>{fetchbook.list_name}<a href="#" style={{color:'#fff',transition:'0.2s ease-out',textAlign:'center', padding:'0.1rem 0.1rem',border:'none',background:'#e31837',outline:'none !important',fontSize:'0.6rem'}}>
                    View Details
                    </a>
                    </li>)}
            </ul>
        
        </>
        )
    }

}