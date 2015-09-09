// Generated by CoffeeScript 1.10.0
(function() {
  var BaseClass, Channels,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseClass = require('./common/base_class');

  Channels = (function(superClass) {
    extend(Channels, superClass);

    function Channels() {
      return Channels.__super__.constructor.apply(this, arguments);
    }

    Channels.prototype.endpoints = {
      archive: '/api/channels.archive',
      create: '/api/channels.create',
      history: '/api/channels.history',
      info: '/api/channels.info',
      invite: '/api/channels.invite',
      join: '/api/channels.join',
      kick: '/api/channels.kick',
      leave: '/api/channels.leave',
      list: '/api/channels.list',
      mark: '/api/channels.mark',
      rename: '/api/channels.rename',
      setPurpose: '/api/channels.setPurpose',
      setTopic: '/api/channels.setTopic',
      unarchive: '/api/channels.unarchive'
    };

    Channels.prototype.archive = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('POST', this.endpoints.archive, opts, callback);
    };

    Channels.prototype.create = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['name']);
      return this.request('POST', this.endpoints.create, opts, callback);
    };

    Channels.prototype.history = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('GET', this.endpoints.history, opts, callback);
    };

    Channels.prototype.info = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('GET', this.endpoints.info, opts, callback);
    };

    Channels.prototype.invite = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'user']);
      return this.request('POST', this.endpoints.invite, opts, callback);
    };

    Channels.prototype.join = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('POST', this.endpoints.join, opts, callback);
    };

    Channels.prototype.kick = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'user']);
      return this.request('POST', this.endpoints.kick, opts, callback);
    };

    Channels.prototype.leave = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('POST', this.endpoints.leave, opts, callback);
    };

    Channels.prototype.list = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('GET', this.endpoints.list, opts, callback);
    };

    Channels.prototype.mark = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'ts']);
      return this.request('POST', this.endpoints.mark, opts, callback);
    };

    Channels.prototype.rename = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'name']);
      return this.request('POST', this.endpoints.rename, opts, callback);
    };

    Channels.prototype.setPurpose = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'purpose']);
      return this.request('POST', this.endpoints.setPurpose, opts, callback);
    };

    Channels.prototype.setTopic = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel', 'topic']);
      return this.request('POST', this.endpoints.setTopic, opts, callback);
    };

    Channels.prototype.unarchive = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['channel']);
      return this.request('POST', this.endpoints.unarchive, opts, callback);
    };

    return Channels;

  })(BaseClass);

  module.exports = Channels;

}).call(this);