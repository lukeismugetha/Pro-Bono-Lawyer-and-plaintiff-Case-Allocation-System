<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="">
  <meta name="description" content="">

  <title>Minimax HTML5 Free Template</title>
<!--

Template 2080 Minimax

http://www.tooplate.com/view/2080-minimax

-->
  <!-- stylesheet css -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/css/nivo-lightbox.css">
	<link rel="stylesheet" href="assets/css/nivo_themes/default/default.css">
	<link rel="stylesheet" href="assets/css/style.css">
	
	<!-- google web font css -->
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,600,700' rel='stylesheet' type='text/css'>


</head>
<body>

<body data-spy="scroll" data-target=".navbar-collapse">
  
<!-- navigation -->
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
      </button>
      <a href="index.html" class="navbar-brand smoothScroll">Label</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
          <li><?php  ?></li>
          <li><?php  ?></li> 
        
      </ul>
    </div>
  </div>
</div>  


<!-- divider section -->
<div class="container">
  <div class="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-md-10 col-sm-10">
      <hr>
    </div>
    <div class="col-md-1 col-sm-1"></div>
  </div>
</div>

<!-- pricing section -->


<!-- divider section -->
<div class="container">
  <div class="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-md-10 col-sm-10">
      <hr>
    </div>
    <div class="col-md-1 col-sm-1"></div>
  </div>
</div>




<!-- contact section -->
<div id="contact"
  <div class="container">
  
    <div class="row">
      <div class="col-md-12 col-sm-12"> <br>
        <h1>WELCOME</h1>
        <h2>Enter the following details for your case</h2>

        <form action="<?= base_url("/case") ?>" method="post" role="form">

				<div class="col-md-1 col-sm-2"></div>

				<div class="col-md-7 col-sm-7">

					<div class="col-md-4">
            <label for="">Choose the date</label><br>
          <input type="date" id="date" name="date"><br><br>
				  	</div>

				  	 <div class="col-md-4">
              <div class="form-group">
                <label for="">Case Category</label>
                <select name="casecategory" id="category-dropdown" class="form-control">
                  <option value="0">Select</option>
                  <?php
                  $caseCategories = session()->get('caseCategories');
                    foreach($caseCategories as $caseCategories){
                      echo '<option value="'.$caseCategories['ID'].'">'.$caseCategories['Type'].'</option>';
                    }
                  ?>
                </select>
              </div>
              <div class="form-group">
                <label for="">Case Sub Category</label>
                <select name="" id="subcategory-dropdown" class="form-control">
                <option value="0">Select</option>
                
                </select>
              </div>    			    
					 </div>

           <div class="col-md-4">
				  	 	    <input name="status" required type="radio" value="Starting">
							<label for="status">Starting</label>
				  	 	     <input name="status" required type="radio" value="Ongoing">
							 <label for="status">Ongoing</label>     
               			    
					 </div>

					<div class="col-md-4 ">
						<input name="reg_user" type="submit" class="form-control" id="submit" value="Submit Case">
					</div>
				</div>
				<div class="col-md-1 col-sm-1"></div>
			</form>

      </div>
    </div>
  </div>
</div>

<!-- divider section -->
<div class="container">
  <div class="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-md-10 col-sm-10">
      <hr>
    </div>
    <div class="col-md-1 col-sm-1"></div>
  </div>
</div>

<!-- footer section -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h2>Our Office</h2>
        <p>101 Clean Street, CBD NAIROBI, CA 10110</p>
        <p>Email: <span>label@company.com</span></p>
        <p>Phone: <span>0700-020-034</span></p>
      </div>
      <div class="col-md-6 col-sm-6">
        <h2>Social Us</h2>
        <ul class="social-icons">
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-twitter"></a></li>
                    <li><a href="#" class="fa fa-google-plus"></a></li>
          <li><a href="#" class="fa fa-dribbble"></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<!-- divider section -->
<div class="container">
  <div class="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-md-10 col-sm-10">
      <hr>
    </div>
    <div class="col-md-1 col-sm-1"></div>
  </div>
</div>

<!-- copyright section -->
<div class="copyright">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <p>Copyright &copy; 2016 Minimax Digital Firm 
                
                - Design: tooplate</p>
      </div>
    </div>
  </div>
</div>

<!-- scrolltop section -->
<a href="#top" class="go-top"><i class="fa fa-angle-up"></i></a>


<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.min.js"></script>	
<script src="assets/js/nivo-lightbox.min.js"></script>
<script src="assets/js/smoothscroll.js"></script>
<script src="assets/js/jquery.nav.js"></script>
<script src="assets/js/isotope.js"></script>
<script src="assets/js/imagesloaded.min.js"></script>
<script src="assets/js/custom.js"></script>


<script>
$(document).ready(function() {
$('#category-dropdown').change(function() {
cid = $('#category-dropdown').val();
$.ajax({
  url: '<?= base_url('getCaseCategoriesWhere') ?>' + "/" + cid,
  type: "GET",
  success:function(data){
    const obj = $.parseJSON(data)
    console.log(obj[0]);
    var html = '';
    var i;
    var j;
    for(i=0; i<obj.length; i++){
        html += '<option value='+obj[i].ID+'>'+obj[i].Case_Category+'</option>';
        console.log(obj[i].Case_Category)
      
    }
  $('#subcategory-dropdown').html(html);
  }  
});
});
});
</script>
</body>
</html>