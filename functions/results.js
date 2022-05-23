const getData = async()=>{
  let url = `http://localhost:8080/Backend_Sistema_de_Votacion/Elecciones/Votacion/Candidatos`;
  let response = await fetch(url, {method:'GET'} );
  let obj = await response.json();
  const names = [obj[0].president, obj[1].president, obj[2].president, obj[3].president, obj[4].president,obj[5].president,obj[6].president,obj[7].president,obj[8].president];
  return names;
}

const getDataVotes = async()=>{
  let url = `http://localhost:8080/Backend_Sistema_de_Votacion/Elecciones/Votacion/Candidatos`;
  let response = await fetch(url, {method:'GET'} );
  let obj = await response.json();
  const votes = [obj[0].votes, obj[1].votes, obj[2].votes, obj[3].votes, obj[4].votes, obj[5].votes,obj[6].votes,obj[7].votes,obj[8].votes];
  return votes;
}


const loadChart = async()=>{
  let labelsData = await getData();
  console.log(labelsData);

  let dataNumbers = await getDataVotes();
  console.log(dataNumbers);

  const data = {
      labels: labelsData,
      datasets: [{
          label: 'AHAHAHAH',
          data: dataNumbers,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  }

  const config = {

      type: 'pie',
      data,
      options: {
          tooltips: {
              enabled: true
          },
          plugins: {
              datalabels: {
                  formatter: (dataNumbers, chart) => {

                      let sum = 0;
                      let dataArr = chart.chart.data.datasets[0].data;
                      dataArr.map(data => {
                          sum += data;
                      });
                      let percentage = (dataNumbers * 100 / sum).toFixed(2) + "%";
                      return percentage;


                  },
                  color: '#fff',
              }
          }
      }

  };

  const myChart = new Chart(
      document.getElementById('myChart'),config

  );

}


loadChart();