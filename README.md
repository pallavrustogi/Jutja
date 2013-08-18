Jutja
====

Jutja - Simplifying Project management



Important Links:
===============

Facebook Group: https://www.facebook.com/groups/137305376468384/?fref=ts

Facebook Page : https://www.facebook.com/Jutja

Google Plus   : https://plus.google.com/u/0/109049906462457335753

Trello        : https://trello.com/b/iaOfF8vI/jutja

Google Group  : https://groups.google.com/forum/?hl=en#!forum/shbhlabh

Production Env: https://www.jutja.com

Dev Env       : https://dev.jutja.com

The logic guide

"/session/login" to login , variables required username and password

"//signup" to signup variable required username ,password and password-confirm 

"/session/logout" to logout 

Our main controller is node . I am currently tring to fuse in the permission logic and stuff. Will be updating this whenever I will add anything

 # Backbone Conventions
    GET   :    /:controller            => findAll()
    GET   :    /:controller/read/:id        => find(id)
    POST  :    /:controller/create        => create()
    POST  :    /:controller/create/:id        => create(id)
    PUT   :    /:controller/update/:id        => update(id)
    DELETE:    /:controller/destroy/:id    => destroy(id)

    # You can also explicitly state the action
    GET   :    /:controller/findAll        => findAll()
    GET   :    /:controller/find/:id        => find(id)
    POST  :    /:controller/create        => create(id)
    PUT   :    /:controller/update/:id        => update(id)
    DELETE:    /:controller/destroy/:id    => destroy(id)
