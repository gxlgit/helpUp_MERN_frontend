{{#if creator}}
<div class="row">
  <h5>Volunteers</h5>
  {{#if this.state.volunteers}}
  <ul>
    {{#each this.state.volunteers as |volunteer index|}}
      <li>
        <a href="mailto:{{volunteer.email}}">
          <div class="chip">
            {{#if volunteer.img}}
              <img src="{{volunteer.img}}" alt="{{volunteer.name}}" >
              {{volunteer.name}}
              <i class="close material-icons">email</i>
            {{else}}
              <i class="close material-icons">email</i>
              {{volunteer.name}}
            {{/if}}
          </div>
        </a>
      </li>
    {{/each}}
  </ul>
  {{else}}
    <span class=" light-blue-text text-darken-1">No volunteers yet</span>
  {{/if}}
</div>
{{/if}}
</div>

<!-- only show edit and delete if currentUser created the job -->
{{#if creator}}
<div class="container  card-panel yellow lighten-4 row section">

      <div class = "row blue-grey-text text-darken-2">
      <form name='edit-job' action="/jobs/{{this.state.name}}?_method=put" method="post">
        <h4 class="section">Edit <span class="brand-logo green-text text-darken-3">helpUp</span></h4>
        <div class="input-field">
          <input class='validate' placeholder="Title"type="text" name="job[name]"  id="edit-job-name" value="{{this.state.name}}">
          <label for="edit-job-name">Title</label>
        </div>

        <div class="input-field">
          <label for="edit-job-description">Description</label>
          <input class='validate' placeholder="Description"type="text" name="job[description]" id="edit-job-description" value="{{this.state.description}}">
        </div>

        <div class="input-field">
          <label for="job-date">Date</label>
          <input type="text" class="datepicker" name="job[date]" id="job-date" value="{{this.state.date}}">
          <!-- <input class='validate' type="date" name="job[date]" id="job-date" max="2020-12-31"> -->
        </div>
        <div class="input-field">
          <label for="job-time">Start Time</label>
          <input type="text" class="timepicker" name="job[time]" id="job-time" value="{{this.state.time}}">
        </div>
        <div class="input-field">
          <label for="job-location">Location</label>
          <div id="job-map"></div>
          <div>
            <input id="job-location" type="textbox" name="job[location]" value="{{this.state.location}}">
            <input type="button" value="Find" onclick="codeAddress()">
          </div>
        </div>
        <div class="input-field">
          <label for="job-img">User Photo URL</label>
          <input class="validate" type="text" name="job[img]" id="job-img" value="{{this.state.img}}">
        </div>
        <button class="btn waves-effect waves-light col s6 green darken-3" type="submit" name="action">Update
        </button>
      </form>
      <form class="col s6" name="delete-job" action="/jobs/{{this.state.name}}?_method=delete" method="post">
          <button class="btn waves-effect waves-light green darken-3" type="submit" name="action">Remove
          </button>
      </form>
    </div>
  </div>
{{else}}
<div class = "row">
{{#if volunteer}}
<h4 class="section grey-text">Thanks for signing up!</h4>
<!-- if user is not job creator & is signed up to volunteer, show cancel button -->
<form name="take-part" action="/jobs/{{this.state.name}}/volunteer_update?_method=delete" method="post">
  <div class="input-field hide">
    <label for="remove-volunteer">Volunteer</label>
    <input class='validate' type="text" name="{{currentUser.local.email}}" id="remove-volunteer" value="">
  </div>
    <button class="btn waves-effect waves-light green darken-3" type="submit" name="action">Can't Make It
    </button>
</form>
{{else}}
<!-- if user is not job creator & not already signed up to volunteer, show sign-up button -->
<form  name="take-part" action="/jobs/{{this.state.name}}/volunteer_update" method="post">
  <div class="input-field hide">
    <label for="add-volunteer">Volunteer</label>
    <input class='validate' type="text" name="job[volunteer]" id="add-volunteer" value="{{currentUser.local.email}}">
  </div>
    <button class="btn waves-effect waves-light green darken-3" type="submit" name="action">Take Part
    </button>
</form>
{{/if}}
</div>
{{/if}}

{{else}}
<h2>Sorry, that opportunity could not be found.</h2>
{{/if}}
</body>
