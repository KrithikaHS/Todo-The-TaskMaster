from flask import Flask,render_template,url_for,request,redirect
import random

app=Flask(__name__)
todos=[]
@app.route('/home',methods=["GET","POST"])
@app.route('/',methods=["GET","POST"])
def home():
    if(request.method=="POST"):
        todo_name=request.form["todo_name"]
        cur_id=random.randint(1,1000)
        todos.append({
            'id':cur_id,
            'name':todo_name,
            'checked':False
        })
        
    background_color = request.args.get('background_color', 'lavender')

    return render_template("do.html", items=todos, background_color=background_color)

@app.route('/butto', methods=["POST"])
def butto():
    button_clicked = request.form.get('button_clicked')
    if button_clicked in ['lavender', 'darkseagreen', 'powderblue']:
        return redirect(url_for("home", background_color=button_clicked))
    else:
        return redirect(url_for("home", background_color='lavender'))
    

@app.route("/checked<int:todo_id>",methods=["POST"])
def checked(todo_id):
    background_color = request.form.get('background_color', 'lavender')
    for todo in todos:
        if todo['id']==todo_id:
            todo['checked']=not todo['checked']
            break
    return redirect(url_for("home",background_color=background_color))
@app.route("/delete<int:todo_id>",methods=["POST"])
def delete(todo_id):
    background_color = request.form.get('background_color', 'lavender')
    global todos
    for todo in todos:
        if todo['id']==todo_id:
            todos.remove(todo)
            
    return redirect(url_for("home",background_color=background_color))

if __name__=="__main__":
    app.run(debug=True)
