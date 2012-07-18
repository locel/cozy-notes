Ext.data.JsonP.note({"tagname":"class","name":"note","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-note","members":{"cfg":[],"property":[],"method":[{"name":"allForPath","tagname":"method","owner":"note","meta":{},"id":"method-allForPath"},{"name":"destroyAll","tagname":"method","owner":"note","meta":{},"id":"method-destroyAll"},{"name":"destroyForPath","tagname":"method","owner":"note","meta":{},"id":"method-destroyForPath"},{"name":"destroySome","tagname":"method","owner":"note","meta":{},"id":"method-destroySome"},{"name":"movePath","tagname":"method","owner":"note","meta":{},"id":"method-movePath"},{"name":"updatePath","tagname":"method","owner":"note","meta":{},"id":"method-updatePath"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"note.js","href":"note.html#note"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/note.html#note' target='_blank'>note.js</a></div></pre><div class='doc-contents'><h1>gestion de la classe Note</h1>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-allForPath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-allForPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-allForPath' class='name expandable'>allForPath</a>( <span class='pre'>Object path, Object callback</span> )</div><div class='description'><div class='short'>Return notes which live under given path. ...</div><div class='long'><p>Return notes which live under given path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroyAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-destroyAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-destroyAll' class='name expandable'>destroyAll</a>( <span class='pre'>Object callback</span> )</div><div class='description'><div class='short'>Delete all notes. ...</div><div class='long'><p>Delete all notes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroyForPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-destroyForPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-destroyForPath' class='name expandable'>destroyForPath</a>( <span class='pre'>Object path, Object callback</span> )</div><div class='description'><div class='short'>Destroy notes which live under given path. ...</div><div class='long'><p>Destroy notes which live under given path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroySome' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-destroySome' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-destroySome' class='name expandable'>destroySome</a>( <span class='pre'>Object condition, Object callback</span> )</div><div class='description'><div class='short'>DestroyNote corresponding to given condition\nTODO optimise deletion : each deletion requires on request. ...</div><div class='long'><p>DestroyNote corresponding to given condition\nTODO optimise deletion : each deletion requires on request.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>condition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-movePath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-movePath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-movePath' class='name expandable'>movePath</a>( <span class='pre'>Object path, Object dest, Object humanDest, Object callback</span> )</div><div class='description'><div class='short'>When a node is moved, all notes that are linked to this node are\nupdated : sub-path are replaced by new node path. ...</div><div class='long'><p>When a node is moved, all notes that are linked to this node are\nupdated : sub-path are replaced by new node path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>dest</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>humanDest</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updatePath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='note'>note</span><br/><a href='source/note.html#note-method-updatePath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/note-method-updatePath' class='name expandable'>updatePath</a>( <span class='pre'>Object path, Object newPath, Object newName, Object callback</span> )</div><div class='description'><div class='short'>Change path for every note which are children of given path to the\n\nnew given one. ...</div><div class='long'><h1>Change path for every note which are children of given path to the</h1>\n\n<h1>new given one.</h1>\n\n<h1>It is the result of moving notes inside tree.</h1>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newPath</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});