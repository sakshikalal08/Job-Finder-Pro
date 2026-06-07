async function loadJobs() {

try {

const response =
await fetch(
"https://www.arbeitnow.com/api/job-board-api"
);

const data =
await response.json();

console.log(data);

jobsData = data.data;

displayJobs(jobsData);

}
catch(error){

console.log(error);

}

}
let jobsData = [];

displayJobs(jobsData);

function displayJobs(jobs){

document.getElementById("jobCount").innerText =
`${jobs.length} Jobs Available`;

const container =
document.getElementById("jobsContainer");

container.innerHTML="";

jobs.forEach(job=>{

container.innerHTML += `
<div class="job-card">

<h3>${job.title}</h3>

<div class="skills">
${job.location || "Remote"}
</div>


<p>
<strong>Company:</strong> ${job.company_name}
</p>

<p>
<strong>Location:</strong>
${job.location || "Remote"}
</p>

<a
href="${job.url}"
target="_blank"
class="apply-btn"
>
Apply Now
</a>

</div>
`;

});

}

function searchJobs(){

const keyword =
document
.getElementById("searchInput")
.value
.toLowerCase();

const filteredJobs =
jobsData.filter(job=>
job.title.toLowerCase()
.includes(keyword)
);

displayJobs(filteredJobs);

}
document
.getElementById("searchInput")
.addEventListener("input", searchJobs);

loadJobs();