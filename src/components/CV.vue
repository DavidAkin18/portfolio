<template>
  <div class="container">
    <div class="header">
      <h1>David Akintola</h1>
      <p>Frontend Developer</p>
    </div>
    
    <div class="section">
      <h2>Experience</h2>
      <ul>
        <li>
          <span class="date">2020 - Present</span>
          <span class="title">Senior Developer</span> - 
          <span class="company">Tech Company</span>
          <p>Leading a team of developers to build modern web applications.</p>
        </li>
        <li>
          <span class="date">2018 - 2020</span>
          <span class="title">Frontend Developer</span> - 
          <span class="company">Another Tech Company</span>
          <p>Worked on improving user interfaces and user experiences.</p>
        </li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Education</h2>
      <ul>
        <li>
          <span class="date">2014 - 2018</span>
          <span class="title">B.Sc. Sociology and Anthropology</span> - 
          <span class="company">Obafemi Awolowo University</span>
        </li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Skills</h2>
      <div class="skills">
        <div class="skill">JavaScript</div>
        <div class="skill">Vue.js</div>
        <div class="skill">CSS</div>
        <div class="skill">HTML</div>
        <div class="skill">Git</div>
        <div class="skill">Responsive Design</div>
      </div>
    </div>
  </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.head-div{
  color: #1e3a8a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
}

.container {
  max-width: 900px;
  margin: 50px auto;
  margin-top: 70px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.header h1 {
  margin-bottom: 10px;
  font-size: 2.5em;
  color: #333;
}

.header p {
  font-size: 1.2em;
  color: #666;
}

.section {
  margin-top: 30px;
}

.section h2 {
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
  border-bottom: 2px solid #0a74da;
  display: inline-block;
  padding-bottom: 5px;
}

.section ul {
  list-style-type: none;
  padding-left: 20px;
}

.section ul li {
  margin-bottom: 10px;
}

.section ul li .date {
  font-weight: bold;
  color: #0a74da;
}

.section ul li .title {
  font-weight: bold;
}

.section ul li .company {
  color: #666;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}

.skill {
  flex: 1;
  min-width: 150px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background: #0a74da;
  color: #fff;
  border-radius: 3px;
  text-align: center;
}
</style>