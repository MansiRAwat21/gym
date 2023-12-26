export const exerciseOption={
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '79954aa55emsh5be25d910b4b58bp14b6cajsnd675ed09425a'
        }
      };
      
     

export const fetchData = async(url, options)=>{
    const response = await fetch (url,options);
    const data = await response.json();

    return data;

}