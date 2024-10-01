from json import dump,load

while True:
    input()
    with open("clublist.json") as file:
        ExistContent:dict = load(file)
    
    with open("read.txt") as file:
        readed = file.readlines()
        clubname = readed[0].split(" ")[1].replace("\n","")
        shortname = readed[0].split(" ")[0]
        membercount = int(readed[1])
        place = readed[2].replace("\n","")
        ExistContent[shortname]= {"name":clubname,"sname":shortname, "count":membercount, "place":place}
        readed.pop([i for i in range(3)]) if len(readed) > 4 else None
        for other in readed:
            if len(readed) > 4:
                ExistContent[shortname][other.split(":")[0]] = other.split(":")[1]
            else:
                break
        with open("clublist.json","w",encoding="utf-8") as file:
            dump(ExistContent,file,indent=4)
    print(ExistContent)