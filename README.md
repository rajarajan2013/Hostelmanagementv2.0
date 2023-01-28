# Hostelmanagementv2.0
Home page -
    -NAVBAR 
    -Logo moto side by side , below which is a carousel of 3 slides each having,
    -a search bar with description below it and placeholder same as the description mentioned below it 
     1st slide - reg no , 2nd slide student Id, 3rd slide student Name 
    -Function => to be able to search any specific student with either their name or reg no or student ID ,( specific single student search )
 
Attendance Report - 
    -NAVBAR 
    -buttons next to next (inline-block)  each will be a drop down , 
     [1, hostelname | 2,floornumber | 3,From | 4,To | 5,Month | 6,Year |7,Absentees (dropdown will consist of all, absentees, leave, present)
     | 7,SUBMIT BUTTON (not a dropdown)]
    -by first field you can search hostel wise, by field 3 and 4 you can search datewise
    -right below these buttons include a search bar(to search student wise , with reg number , 
     which is alligned with the tabular columns start  bellow the search bar.
    -tabular columns will have fields like name, regno, roomno, leave ,absent, present.
    -parallely to this search bar include a toggle button on the right alligned with the tabular columns end.
    -toggle button (present and absent (green color while in present, red color while in absent)) 
    -function for  toggle button => default will be present meaning the entire present field will be marked present for every student
    -if we toggle it to absent , the entire absent column will be marked absent (incase its a holiday)
    -Tabuar column for a male admin and super admin will have details of any one boys hostel data as the default view
    -whereas for female admin it will have details of any one of the girls hostel data as default view, this data will have a students attendance
     for the number of days of the current month 
    -below the tabular column a button to switch between the number of pages of data ( to go to next or previous pages )
    -so, a single page should contain data of 50 persons.
    -a print button at end of the page right side alligned with starting of the tabular column.
 
Booking report -
    -Heading saying boooking report 
    -below that 4 buttons , first button alligned with starting of tabular column  
    -(4 buttons - add modify save done) 
    -parallel to these buttons will be a search bar, function => can search using any field 
     from the below table like( room no, booking type, name etc), 
    -below these two components will be the tabular column with fields
     (S.No , student name, reg num, branch, room no, booking type, total amount )
    -below the tabular column a button to switch between the number of pages of data ( to go to next or previous pages )
    -so, a single page should contain data of 50 persons.
    -a print button at end of the page right side alligned with starting of the tabular column.
  
Master Report - 
    -Heading saying Complete Report
    -below that 4 buttons , first button alligned with starting of tabular column  
    -(4 buttons - add modify save(will update the changed data in databse but will still be able to edit), 
    done(comes out of the edit function and tabular lines goes to the default white color will have to click modify again to edit)) 
    -while in modify mode (make the tabular lines green color and selected field alone blue color )
    -parallel to these buttons will be a search bar, function => can search using any field 
    -from the below table like( room no, booking type, name etc), 
    -below these two components will be the tabular column with all the fields in the sample report provided by mam .
    -below the tabular column a button to switch between the number of pages of data ( to go to next or previous pages )
    -so, a single page should contain data of 50 persons.
    -a print button at end of the page right side alligned with starting of the tabular column.
    
Custom Report - 
     -At first we will show them a form to get their requirements. 
     -we will follow layout similar to as https://optimusam.github.io/srmgpa/ , instead of courses we will serial number, instead of 
     -credits we will have fields , no grades achieved, default of 5 fields , which need not be mandatory, instead of add course
     -it will be add field, so after the form is submitted, a tabular column will show with the fields entered in the form . 
     -so all form input fields will have dropdowns, this dropdwon will have the entire list of fields, so few dropdowns 
      like name student id reg no, wont have any dropdown for themselves, but other fields like hostel name floor number should have dropdowns .
     -below the tabular column a button to switch between the number of pages of data ( to go to next or previous pages )
     -so, a single page should contain data of 50 persons.
     -a print button at end of the page right side alligned with starting of the tabular column.
      
ROOMS  -
     -Manual hovering of hostels , 
     -flow chart will be updated soon .
