document.addEventListener('DOMContentLoaded', () => {
    // 드라이버 순위 데이터 가져오기
    fetch('https://ergast.com/api/f1/current/driverStandings.json')
        .then(response => response.json()) // 응답을 JSON 형태로 변환
        .then(data => {
            const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            const tableBody = document.querySelector('#standings tbody');

            standings.forEach(driver => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${driver.position}</td>
                    <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
                    <td>${driver.points}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the driver standings:', error));

    // 일정 버튼 클릭 이벤트 처리
    const scheduleButton = document.getElementById('schedule-button');
    const scheduleContainer = document.getElementById('schedule-container');

    scheduleButton.addEventListener('click', () => {
        if (scheduleContainer.style.display === 'none' || scheduleContainer.style.display === '') {
            scheduleContainer.style.display = 'block';
        } else {
            scheduleContainer.style.display = 'none';
        }
    });
});