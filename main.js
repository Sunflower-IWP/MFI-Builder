import { system, world, Dimension,ChatEvent } from "@minecraft/server"
var p1posx = 0,p1posy = 0,p1posz = 0,p2posx = 0,p2posy = 0,p2posz = 0
var svalue = " ",fashion = " ",item = " "
function runc(command) {
        //run command
        world.getDimension("overworld").runCommandAsync(command)
}
world.events.chat.subscribe((main) => {
        var msg = main.message
        if (msg.includes(".g pos1")) {
                p1posx = main.sender.location.x;
                p1posy = main.sender.location.y;
                p1posz = main.sender.location.z;
                runc("say Feedback POS 1:\n X: "+ p1posx+"\n Y: "+p1posy +"\n Z: "+p1posz)
        }if (msg.includes(".g pos2")) {
                p2posx = main.sender.location.x;
                p2posy = main.sender.location.y;
                p2posz = main.sender.location.z;
                runc("say Feedback POS 2:\n X: "+ p2posx+"\n Y: "+p2posy +"\n Z: "+p2posz)
        }if (msg.includes(".str ")) {
                //.str wool 0 hollow
                var im = msg.split(" ")
                item = im[1]
                try {
                        svalue = im[2]
                        fashion = im[3]
                }catch (e) {
                        runc("say Variables excess")
                }finally {
                        var fpos = p1posx + " "+ p1posy+" "+p1posz+" "+p2posx+" "+p2posy+" "+p2posz
                        runc("fill "+fpos+" "+ item +" "+svalue+" "+fashion)
                        svalue = " "
                        fashion = " "
                        item = " "
                }
        }
})