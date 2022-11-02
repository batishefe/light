import './App.css';


function App() {
  return (
    <div className="app">
         <div className="container">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Avatar" id="profile__img" className=" m-3 avatar"></img>


<h4 id="twitter"> Batishefe</h4> 


{/* <h4 id="slack"> Batishefe  </h4>  */}


<div>
<a href="https://twitter.com/batishefe" id="twitter"  className="btn btn-secondary btn-lg btn-block  mb-4">Twitter Link</a>
</div>
<div>
<a href="https://training.zuri.team/" id='btn__zuri' className="btn btn-secondary btn-lg btn-block  mb-4">Zuri Team</a>
</div>
<div>
<a  href="http://books.zuri.team " id="books" className="btn btn-secondary btn-lg btn-block  mb-4">Zuri Books</a>
</div>
<div>
<a  href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__python"  className="btn btn-secondary btn-lg btn-block  mb-4">Python Books</a>
</div>
<div>
<a href="https://background.zuri.team" id="pitch" className="btn btn-secondary btn-lg btn-block  mb-4">Background Check for Coders </a>
</div>
<div>
<a   href="https://books.zuri.team/design-rules" id="book__design" className="btn btn-secondary btn-lg btn-block ">Design Books </a>
</div>


<div className='mb-5 pb-2'>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACGCAMAAABOvyDhAAAA8FBMVEX///8uve/npybZG1Anq27npSAAtOjZFEwRp2bu9PN+xqOV0LI2wO/q2LfmpRj9/PDwtsPbLmLruFXZ8/nYAED4196x6Pn1/Pq54c3YAEXloADpxY3orj/+/PjH5vOFzOhiweah1urg7vSs1MFwupVXr4O11saEx+nQ5+7p8utLsn9Pwu6W0OnG5daHxKW/6/fY6OAzqXSL2vKk27+r3chuw5nb8+varLTViZnOfo/85uvp5efbmqfhusHs3MLu5tXIOl3nuGTRS2jjv37fSm3beI7syoHz2Kv0ytTaADj36cXtyXbuprrjWH3qj6fz1pEn/lnvAAAC20lEQVR4nO3YW1vaMBzH8X+BQnEICHWl1SIguAnD05wHUDePoEN9/+9mSU+QWtjuku75fa4IcPF98qRJgAgAAAAAAAAAAAAAAAAAAKSwrMWBtIx/5jZ3Wq12xx8Ud7u97p4rt+ivvuQ17it/vd83mFyvKDtqpbZfrJXYPBd7Ro4zurKrVukMtMA3oqFfzAxld61wGBZrA6KDMNn4JLtrhXlyiWgtFcn1UuqSrVbqkqmevmQ6HOQ9WnqSyap/9qQoeU7t5KLIf1Ph5GJby4taTf5+LPnooNfvqnEOuq28FpdvUzx575gNjdyB7Fzu5GMx04wlnwUDY1d27+JNSLATS44G/X3ZxdRMLI4fJVYuutYdyS5eljyIJ0fkP4H1pQvje5TcIOs4LD4+k1287PGrsycurGTLN5plY012L2MlTfMJ/ySYZuOUomTDUGCSWc7JoCRqHfqfnPbZU9c/5d/JGd5P1x9KFDOduij682K/0Rh6m5rV8AxT8LeGqqzzi0tuxAfjq8uL63Ay3Zt1wU+JlYs2f5k2Z26ywXmWDcy7Mf/A3co4ZYFzq0T0uFDIegos+dr0BjZvdu8dPRNTzlRk9zIXdjZKHj8E+eYV0YsTD2ace9m9RKOwkidPo9d3RLflhORMRv7SmCfbm1SNkjeItj8sC29p3MguXpzlkZhcS5plXYFZpkczmOQHEpOfktayXlPh+ct6nQW+YQjJlaSV4Uxk53LTjWfbfi5UKZbMtgxHF5Wd34r8p199fJx5R5+YTJWnmuj2RW5oglgyixYpMsWLPiSrT0je8kxU2CFWEI8S/06UUWKPWCrp9NOdddlZqyQe2OWagk9dZMkdQ72tbS45uaxy8jQbJr8uXovkX96Wi6515oxoElyL9G2l97mq7f+QemXnd8WfZt1ReV0ws6zJvHo3jkrNYRTfl5nR7O1tGrx2X97fVT/9AAAAAAAAAAAAAAAAAAD+V38Ae9JHQj0ARY8AAAAASUVORK5CYII=" alt="Avatar" className=" avatar1"></img>
<img src="data:image/png;base64,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" alt="Avatar" className=" avatar2"></img>
</div>
</div>


<hr/>
<footer>
<div class="footer ">
  <div class="row">
    <div class="col-sm-4">
      <h4>
        Zuri Enterprise
      </h4>
    </div>
    <div class="col-sm-4"><p>
    HNG Internship 9 Frontend Task
      </p></div>
    <div class="col-sm-4"><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHYJggWDoLXdw/company-logo_200_200/0/1652218290434?e=2147483647&v=beta&t=aG0GCsr9fXj_3Q9WPx_JOkn_MNOoTkOMHThAUMtnPDE" className="avatar" alt="ing" />


    INGRESSIVE FOR GOOD
      </div>
      </div>


 
</div>
  </footer> 
    </div>
  );
}


export default App;