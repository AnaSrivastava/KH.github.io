import React from 'react';

const SearchBox=({searchfield,ChangeSearch})=>{
	return(
		<div className='pa2'>
		<input 
		className='pa3 bg-washed-red b--purple ba'
		type='search'
		placeholder='Search Kittens' 
		onChange={ ChangeSearch }
		/>
		</div>
	);
}

export default SearchBox;